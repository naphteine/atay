"use client";

import PocketBase from 'pocketbase';

const pb = new PocketBase("https://duga1.xyz");
pb.autoCancellation(false);

export default pb;