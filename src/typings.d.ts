import { ReactNode, ChangeEventHandler } from 'react';

declare module '*.css' {
    const content: { [className: string]: string };
    export default content
}

interface SvgrComponent extends React.FC<React.SVGAttributes<SVGElement>> { }

declare module '*.svg' {
    const svgUrl: string;
    const svgComponent: SvgrComponent;
    export default svgUrl;
    export { svgComponent as ReactComponent };
}

export interface HasClassName {
    className?: string;
}

export interface HasChildren {
    children?: ReactNode;
}

export interface HasOnChange<Element extends HTMLElement> {
    onChange?: ChangeEventHandler<Element>;
}