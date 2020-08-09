import React from 'react';

import { IStarIconProps } from './types';
import './StarIcon.scss';

export default function StarIcon(props: IStarIconProps) {
    return (
        <svg
            width="42"
            height="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21 0l7.06 12.282 13.863 2.92-9.499 10.51 1.507 14.086L21 34.012 8.069 39.798l1.507-14.086-9.5-10.51 13.864-2.92L21 0z"
                fill="#EDB88B"
            />
        </svg>
    );
}
