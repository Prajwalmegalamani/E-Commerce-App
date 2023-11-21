import { render, screen } from '@testing-library/react';

import Image from './Image';
import { imageURL1 } from "../../../utils/constants";
import { imageNotFound } from "../../../utils/constants";

describe("Testing image", () => {
    it('should test if image loaded', () => {
        render(<Image src={imageURL1}
            alt={"bag-Image"}
            height={200} width={300}
        ></Image>
        )
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', imageURL1);
        expect(image).toHaveAttribute('alt', 'bag-Image');
    })
    it('should test if image failed to loaded', () => {
        render(<Image src={"http/WrongURL/"}
            alt={"bag-Image"}
            height={200} width={300}
        ></Image>
        )
        const image = screen.getByRole('img');
        setTimeout(() => {
            expect(image).toHaveAttribute('src', imageNotFound);
        }, 500);
    })

})