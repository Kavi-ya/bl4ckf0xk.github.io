import { NextResponse } from 'next/server';
import CryptoJS from 'crypto-js';

// Since the whole app is statically exported, we'll store the photo paths as an AES encrypted string.
// If the user inputs the correct flag: "bl4ckf0xk{v01d_v01c3_n0_3sc4p3}"
// It will correctly decrypt this string back into a JSON array of image URLs.

const secretFlag = "bl4ckf0xk{v01d_v01c3_n0_3sc4p3}";

// Real user-provided image paths
const rawGalleryData = [
    "/photos/476017FF-6F58-4D5B-A494-FAD12965A807.JPEG",
    "/photos/E918A639-15B8-4E5A-93B1-A6077F4E7010.JPEG",
    "/photos/F8AC12D6-8F4D-4842-9E3F-B96EF4FF0651.JPEG",
    "/photos/FFD287E8-B3B7-4B37-A2C0-BEB67C383B54.JPEG",
    "/photos/IMG_0043.jpg",
    "/photos/IMG_0059.jpg",
    "/photos/IMG_0063.jpg",
    "/photos/IMG_0083.jpg",
    "/photos/IMG_0136.jpg",
    "/photos/IMG_0156.JPEG",
    "/photos/IMG_0164.JPEG",
    "/photos/IMG_0200.JPEG",
    "/photos/IMG_0268.JPEG",
    "/photos/IMG_0303.JPEG",
    "/photos/IMG_0332.jpg"
];

// This script pre-encrypts the data payload so we can bake it into the client-side code directly
const encryptedPayload = CryptoJS.AES.encrypt(JSON.stringify(rawGalleryData), secretFlag).toString();

// We will export this constant to be used by the gallery page.
export const encryptedGalleryData = encryptedPayload;

// You can copy/paste this payload into the frontend page to verify:
// console.log("Encrypted Payload for Frontend:", encryptedGalleryData);
