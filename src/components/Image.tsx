import { ReactElement } from 'react';
import Image from 'next/image';

type ImageProps = {
	src: string; // needs a leading slash
	alt: string;
	width: number;
	height: number;
	quality?: number;
};

export const LocalImage = ({
	src,
	alt = '',
	...props
}: ImageProps): ReactElement => {
	return (
		<Image
			src={src} // Note the leading slash
			alt={alt}
			quality={props.quality ?? 75}
			{...(props.width && props.height ? {} : { layout: 'fill' })}
			objectFit="contain"
			{...props}
		/>
	);
};
