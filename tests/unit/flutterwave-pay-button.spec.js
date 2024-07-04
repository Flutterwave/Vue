import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import FlutterwavePayButton from "../../lib/components/flutterwave-pay-button.vue";
import Flutterwave from "../../lib/entry.esm";

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
	const wrapper2 = mount(FlutterwavePayButton, {
		global: {
			plugins: [[Flutterwave, { publicKey: "FWPub" }]]
		}
	});

	expect(wrapper2.text()).toContain('');

	wrapper2.find('button').trigger('click');
	console.log(wrapper2.emitted());
});

test("Flutterwave API", () => {
	
});
