import { inject } from "vue";
// @ts-ignore
import global from "../global";
import { PaymentOptions, PaymentSuccessResponse } from "../interfaces.ts";

export default function (
  options: { publicKey?: string } = { publicKey: inject("public-key") },
) {
  return {
    payWithFlutterwave: function (paymentParams: PaymentOptions): void {
      const payData = {
        ...paymentParams,
        public_key:
          paymentParams.public_key ?? options.publicKey ?? inject("public-key"),
        currency: paymentParams.currency ?? "NGN",
      };

      window.FlutterwaveCheckout(payData);
    },
    asyncPayWithFlutterwave: async function (
      paymentData: PaymentOptions,
    ): Promise<any> {
      return new Promise((resolve) => {
        const payData = {
          ...paymentData,
          public_key:
            paymentData.public_key ?? options.publicKey ?? inject("public-key"),
          currency: paymentData.currency ?? "NGN",
          callback: ($event: PaymentSuccessResponse | any) => {
            resolve($event);
          },
        };

        window.FlutterwaveCheckout(payData);
      });
    },
    closePaymentModal: function (waitDuration = 0) {
      setTimeout(() => {
        document
          .getElementsByName("checkout")[0]
          .setAttribute(
            "style",
            "position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;",
          );
        document.body.style.overflow = "";
      }, waitDuration * 1000);
    },
  };
}
