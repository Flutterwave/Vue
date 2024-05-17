<script setup lang="ts">
// TODO: Use composables like 'useFlutterWave' or inject rather than using globalProperties
import { FlutterwavePayButton } from "../lib/components";
import useFlutterWave from "../lib/composables/useFlutterWave";

const fw = useFlutterWave();

function makePaymentCallback(response: any) {
  console.log("Pay", response);
  fw.closePaymentModal(5);
}
function asyncPay() {
  fw.asyncPayWithFlutterwave(paymentData).then((response: any) => {
    console.log(response);
    fw.closePaymentModal(5);
  });
}
function closeModalCallback() {
  console.log("Payment is closed");
}
function generateReference() {
  const date = new Date();
  return date.getTime().toString();
}

const paymentData = {
  tx_ref: generateReference(),
  amount: "100",
  redirect_url: "https://www.google.com",
  meta: {
    counsumer_id: "7898",
    consumer_mac: "kjs9s8ss7dd",
  },
  customer: {
    name: "Demo Customer  Name",
    email: "customer@mail.com",
    phone_number: "0818450***44",
  },
  customizations: {
    title: "Customization Title",
    description: "Customization Description",
    logo: "https://flutterwave.com/images/logo-colored.svg",
  },
  callback: makePaymentCallback,
  onclose: closeModalCallback,
};
</script>

<template>
  <div class="main">
    <FlutterwavePayButton v-bind="paymentData">
      Pay with Flutterwave
    </FlutterwavePayButton>
    <button @click="asyncPay()">Pay With Promise</button>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.main button {
  padding: 1rem;
}
</style>
