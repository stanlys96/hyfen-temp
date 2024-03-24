// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import qs from 'qs'
// import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res) {
	const query = qs.stringify(req.query)
	const response = await fetch(
		`https://polygon.api.0x.org/swap/v1/quote?${query}`,
		{
			headers: {
				'0x-api-key': process.env.NEXT_PUBLIC_0X_API_KEY, // process.env.NEXT_PUBLIC_0X_API_KEY,
			},
		}
	)

	const data = await response.json()

	res.status(200).json(data)
}
