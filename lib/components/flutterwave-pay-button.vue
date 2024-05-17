<script lang="ts">
export default {
  name: "FlutterwavePayButton",
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup lang="ts">
import { defineProps } from "vue";
import useFlutterWave from "../composables/useFlutterWave";
import { PaymentOptions } from "../interfaces";
const props = defineProps({
  public_key: String,
  tx_ref: {
    type: String,
    required: true,
  },
  amount: {
    type: [String, Number],
    required: true,
  },
  currency: String,
  payment_options: String,
  redirect_url: String,
  meta: Object,
  customer: {
    type: Object,
    required: true,
  },
  customizations: Object,
  payment_plan: [String, Number],
  subaccounts: Array,
  callback: Function,
  onclose: Function,
});

const payWithFlutterwave = useFlutterWave().payWithFlutterwave;

function showPaymentModal(): void {
  const paymentParams: PaymentOptions = {
    tx_ref: props.tx_ref,
    amount: props.amount,
    currency: props.currency,
    payment_options: props.payment_options,
    redirect_url: props.redirect_url,
    meta: props.meta,
    customer: props.customer as {
      email: string;
      name?: string;
      phone_number?: string;
    },
    customizations: props.customizations,
    payment_plan: props.payment_plan,
    subaccounts: props.subaccounts as {
      id: string;
    }[],
    // TODO: Validate using optional callbacks
    callback: (response: unknown) => props.callback?.(response),
    onclose: () => props.onclose?.(),
  };

  if (props.public_key) {
    paymentParams.public_key = props.public_key;
  }

  // TODO: Use Composables or Inject rather than using global properties
  
  payWithFlutterwave(paymentParams);
}
</script>

<template>
  <button @click="showPaymentModal">
    <slot></slot>
  </button>
</template>
