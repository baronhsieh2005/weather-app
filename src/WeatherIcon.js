import React from 'react';

const WeatherIcon = ({ iconType }) => {
  switch (iconType) {
    case 'sunday-sunny':
    case 'wednesday-sunny':
    case 'friday-sunny':
      return (
        <svg className={iconType} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <g>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"
                  d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
            <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
          </g>
        </svg>
      );
    case 'monday-cloudy':
    case 'saturday-cloudy':
      return (
        <svg className={iconType} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
          <defs>
            <clipPath id="a">
              <path fill="none" d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"/>
            </clipPath>
          </defs>
          <g clip-path="url(#a)">
            <g>
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"/>
              <animateTransform attributeName="transform" dur="45s" from="0 19 24" repeatCount="indefinite" to="360 19 24" type="rotate"/>
            </g>
          </g>
          <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        </svg>
      );
    case 'tuesday-rainy':
      return (
        <svg className={iconType} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
          <g>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
            <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </g>
          <g>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
            <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </g>
          <g>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
            <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
            <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
          </g>
        </svg>
      );
    case 'thursday-windy':
      return (
        <svg className={iconType} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
           <g>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 20h30"/>
            <animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
          </g>
          <g>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M19 26h26"/>
            <animateTransform attributeName="transform" begin="-0.2s" dur="2s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
          </g>
          <g>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M21.5 32h21"/>
            <animateTransform attributeName="transform" begin="-0.4s" dur="2s" repeatCount="indefinite" type="translate" values="-5 0; 5 0; -5 0"/>
          </g>
          <g>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M24 38h16"/>
            <animateTransform attributeName="transform" begin="-0.6s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0; -6 0"/>
          </g>
          <g>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M28 44h8"/>
            <animateTransform attributeName="transform" begin="-0.8s" dur="2s" repeatCount="indefinite" type="translate" values="-7 0; 7 0; -7 0"/>
          </g>
        </svg>
      );
    default:
      return null;
  }
};

export default WeatherIcon;