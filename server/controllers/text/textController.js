import { pipeline } from "@xenova/transformers";
import tryCatch from "../../utils/tryCatch.js";

const textSummarization = tryCatch(async (req, res) => {

    const pipe = await pipeline("summarization")
    const text = await req.body.text
    const textResult = await pipe(text, { min_length: 80 })
    res.status(200).json({
        succeded: true,
        data: textResult,
    });

});

const textMethod = {
    textSummarization
}
export default textMethod;