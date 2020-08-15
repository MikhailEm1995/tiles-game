import React from 'react';

import { IInstagramIconProps } from './types';
import './InstagramIcon.scss';

export default function InstagramIcon(props: IInstagramIconProps) {
    return (
        <svg
            viewBox="8.29 9.157 22.247 22.135"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
        >
            <g transform="matrix(0.087523, 0, 0, 0.087523, -2.288037, -1.109605)">
                <path
                    d="M 247.088 243.754 m -65.259 0 a 65.259 65.259 0 1 0 130.518 0 a 65.259 65.259 0 1 0 -130.518 0 Z M 247.088 243.754 m -39.154 0 a 39.154 39.154 0 0 1 78.308 0 a 39.154 39.154 0 0 1 -78.308 0 Z"
                    fill="white"
                    // bxShape="ring 247.088 243.754 39.154 39.154 65.259 65.259 1@b0238d36"
                />
                <circle fill="white" cx="314.92" cy="176.16" r="15.06"/>
                <path
                    d="M 143.09 136.09 C 162.715 114.353 202.01 118.075 247.783 117.316 L 247.783 117.307 C 247.876 117.309 247.969 117.31 248.062 117.312 C 248.154 117.31 248.247 117.309 248.34 117.307 L 248.34 117.316 C 294.111 118.075 333.18 114.353 352.805 136.09 C 378.439 164.481 373.467 200.335 375.022 244.09 L 375.037 244.09 C 375.034 244.161 375.032 244.232 375.029 244.304 C 375.032 244.375 375.034 244.446 375.037 244.517 L 375.022 244.517 C 373.467 288.265 378.439 323.039 352.805 351.43 C 333.18 373.167 294.111 369.445 248.34 370.204 L 248.34 370.213 C 248.247 370.211 248.154 370.21 248.062 370.208 C 247.969 370.21 247.876 370.211 247.783 370.213 L 247.783 370.204 C 202.01 369.445 162.715 373.167 143.09 351.43 C 117.456 323.039 122.428 288.265 120.873 244.517 L 120.858 244.517 C 120.861 244.446 120.863 244.375 120.866 244.304 C 120.863 244.232 120.861 244.161 120.858 244.09 L 120.873 244.09 C 122.428 200.335 117.456 164.481 143.09 136.09 Z M 157.577 154.556 C 145.823 173.747 144.201 197.586 143.986 244.304 C 144.201 291.017 145.823 313.773 157.577 332.964 C 170.138 347.896 211.801 347.678 248.062 347.711 C 284.32 347.678 325.757 347.896 338.318 332.964 C 350.072 313.773 351.694 291.017 351.909 244.304 C 351.694 197.586 350.072 173.747 338.318 154.556 C 325.757 139.624 284.32 139.842 248.061 139.809 C 211.801 139.842 170.138 139.624 157.577 154.556 Z"
                    fill="white"
                />
            </g>
        </svg>
    );
}