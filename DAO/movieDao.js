import {movieModel} from "../Models/Model.js";

export async function findRandomMovie() {
    return movieModel.aggregate([{ $sample: { size: 3} }])
}