interface ExternalPaymentService {
  chargeCurrency: string;
  pendingCharges: ReadonlyArray<{
    chargeId: string;
    customerId: string;
    value: string;
  }>;
  createCharge(customerId: string, amount: number, currency: string): string;
  cancelCharge(chargeId: string): void;
}

type Charge = {
  chargeId: string;
  customerId: string;
  amount: number;
  currency: string;
};

class ExternalPaymentServiceAdapter {
  private externalService: ExternalPaymentService;

  constructor(externalService: ExternalPaymentService) {
    this.externalService = externalService;
  }

  createCharge({
    customerId,
    amount,
  }: {
    customerId: string;
    amount: number;
  }): string {
    const chargeId = `charge-${Date.now()}`; // Generate a unique charge ID
    const newCharge = {
      chargeId,
      customerId,
      value: `${amount} ${this.externalService.chargeCurrency}`,
    };

    // Add the charge to the service's pendingCharges (immutable simulation)
    (this.externalService.pendingCharges as any).push(newCharge);

    return chargeId;
  }

  cancelCharge({ chargeId }: { chargeId: string }): void {
    // Find the index of the charge to remove
    const index = this.externalService.pendingCharges.findIndex(
      (charge) => charge.chargeId === chargeId
    );

    if (index !== -1) {
      const mutableCharges = [...this.externalService.pendingCharges];
      mutableCharges.splice(index, 1);
      (this.externalService.pendingCharges as any) = mutableCharges;
    }
  }

  updateCharge({
    chargeId,
    amount,
    currency,
  }: {
    chargeId: string;
    amount: number;
    currency: string;
  }): string {
    const charge = this.externalService.pendingCharges.find(
      (c) => c.chargeId === chargeId
    );
    if (!charge) throw new Error("Charge not found");

    this.cancelCharge({ chargeId });
    return this.createCharge({
      customerId: charge.customerId,
      amount,
    });
  }

  listCharges(): Charge[] {
    return this.externalService.pendingCharges.map((charge) => {
      const [amount, currency] = charge.value.split(" ");
      return {
        chargeId: charge.chargeId,
        customerId: charge.customerId,
        amount: parseFloat(amount),
        currency,
      };
    });
  }
}

export default ExternalPaymentServiceAdapter;
