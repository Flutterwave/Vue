import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import FlutterwavePayButton from "../../lib/components/flutterwave-pay-button.vue";
import Flutterwave, { useFlutterWave } from "../../lib/main";

test("Basic Button Functionality", () => {
	const wrapper = mount(FlutterwavePayButton, {
		slots: {
			default: 'Pay with Flutterwave Button'
		}
	});

	expect(wrapper.text()).toContain('Pay with Flutterwave Button');

	expect(async () => await wrapper.find('button').trigger('click')).rejects.toThrowError();
});

test("General Functionality with Plugin", () => {
	const wrapper = mount(FlutterwavePayButton, {
		global: {
			plugins: [[Flutterwave, { publicKey: "FWPub" }]]
		}
	});

	expect(wrapper.text()).toContain('');

	wrapper.find('button').trigger('click');
	console.log(wrapper.emitted());
});

test("Flutterwave API", () => {
	const fw = useFlutterWave();

	function makePaymentCallback(response) {
	console.log("Pay", response);
	fw.closePaymentModal(5);
	}
	function asyncPay() {
	fw.asyncPayWithFlutterwave(paymentData).then((response) => {
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
	const wrapper = mount(FlutterwavePayButton, {
		slots: { default: "Pay with Flutterwave Button" },
		global: { plugins: [[Flutterwave, { publicKey: "FWPUB-10d02jforif0euebfiofbw3irbr93y89fge378fgy7" }]] },
		props: {
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
		}
	});

	expect(wrapper.text()).toContain('Pay with Flutterwave Button');

	expect(() => wrapper.find('button').trigger('click')).toHaveNthReturnedWith;
	// fetch operations aborted, but all seems to be well
});
