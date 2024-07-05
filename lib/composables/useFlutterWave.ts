/**
 * The `useFlutterWave` composable
 */
import { inject } from "vue";
// @ts-ignore
import global from "../global";
import { PaymentOptions, PaymentSuccessResponse } from "../interfaces.ts";

/**
 * The flutterwave composable, used in interacting with functionality for the Flutterwave API.
 * 
 * The composable can be used to compose function handlers that run after actions concerning the Flutterwave API, or for composing your own components to interact with the Flutterwave API
 * The composable exports functions that can be used to interact with the API synchronously or asynchronously with Promises
 * 
 * ```vue
 * <script>
 * const fw = useFlutterWave();
 * 
 * const options = {
 *  // options...
 * };
 * </script>
 * 
 * <template>
 *  <div>
 *    <button v-on:click="fw.payWithFlutterwave(options)">Pay</button>
 *    <button v-on:click="fw.asyncPayWithFlutterwave(options)">Pay Async</button>
 *  </div>
 * </template>
 * ```
 * 
 * @param options Optional options to pass to the composable
 * @returns 
 * 
 * @example
 * const fw = useFlutterWave();
 */
export default function (
  options: { publicKey?: string } = { publicKey: inject("public-key") },
) {
  return {
    /**
     * Function used to perform a payment given payment options
     * @param paymentParams The payment options object
     */
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
