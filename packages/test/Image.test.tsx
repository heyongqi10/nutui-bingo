import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { GiftBox } from "../design";

describe("Image", () => {
	it("should render a div", () => {
		const giftBox = render(
			<GiftBox />,
		);
		const element = giftBox.container.firstElementChild;
		expect(element?.className).toBe("nutbig-giftBox_wrapper");
	});
});
