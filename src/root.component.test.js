import {render} from "@testing-library/react";
import {RootComponent} from "./root.component";

describe("Root component", () => {
    it("should be in the document", () => {
        const {getByText} = render(<RootComponent/>);
        expect(getByText(/Page 1/i)).toBeInTheDocument();
    });
});
