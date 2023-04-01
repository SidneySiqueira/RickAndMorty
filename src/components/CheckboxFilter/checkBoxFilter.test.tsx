import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from '@/Redux/store';
import CheckboxFilter from ".";
import { optionsGender, optionsStatus } from "@/utils/options";

describe("CheckboxFilter component", () => {
    test("renders CheckboxFilter component with given options", () => {

        const { getByTestId } = render(
            <Provider store={store}>
                <CheckboxFilter optionsStatus={optionsStatus} optionsGender={optionsGender}/>
            </Provider>
        );

        const boxCheckboxFilterElement = getByTestId("box-checkboxFilter");

        expect(boxCheckboxFilterElement).toBeInTheDocument();
    });
});