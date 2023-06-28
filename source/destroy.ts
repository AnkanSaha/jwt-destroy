import {green} from 'outers'; // Importing from outers for coloring the output
import {sign} from 'jsonwebtoken'; // Importing jsonwebtoken for generating the token

// Current Time
const todayDate = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;

// Class for all features
/* The Jwt class is used to generate a token with a payload and optional expiry time. */
export class Jwt {
	// Token

	private readonly signatureKey: string;

	/**
 * The constructor function initializes the signatureKey property with the provided value or a default
 * value of 'secret'.
 * @param {string} signatureKey - The `signatureKey` parameter is a string that represents the key used
 * for signing or verifying signatures. It is an optional parameter, meaning it can be provided or
 * omitted when creating an instance of the class. If no value is provided, the default value is set to
 * `'secret'`.
 */
	constructor(signatureKey: string) {
		this.signatureKey = signatureKey ?? 'secret';
	}

	// Generate the token
	/**
 * The function generates a token using a payload and an optional expiry time, and returns a record
 * containing information about the generated token.
 * @param {unknown} Payload - The `Payload` parameter is of type `unknown`, which means it can accept
 * any type of data. It represents the data that you want to include in the token.
 * @param [expiry=1h] - The `expiry` parameter is an optional parameter that specifies the expiration
 * time for the generated token. It is set to a default value of '1h', which means the token will
 * expire after 1 hour.
 * @returns a Promise that resolves to a Record<string, unknown> object.
 */
	public async generate(Payload: unknown, expiry = '1h'): Promise<Record<string, unknown>> {
		const signedData: string = sign({data: Payload}, this.signatureKey, {expiresIn: expiry});
		const fullResult: Record<string, unknown> = {
			message: 'Token generated successfully',
			toKen: signedData,
			algoRithm: 'HS256 (Default)',
			expiry,
			currentTimeStamp: todayDate,
		};
		green(fullResult);
		return fullResult;
	}
}
