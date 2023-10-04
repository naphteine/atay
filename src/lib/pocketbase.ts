"use client";

import PocketBase from "pocketbase";

const pb = new PocketBase("https://aya.gokay.works");
pb.autoCancellation(false);

export default pb;