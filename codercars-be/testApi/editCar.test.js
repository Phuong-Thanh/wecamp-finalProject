// import app from "../app";
// import request from "supertest";
// import mongoose from "mongoose";
// import { data } from "./testEditData";
// import Car from "../models/Car";
// import { editCar } from "../controllers/car.controller";

// let latestData = Car.find().hint({ $natural: -1 }).limit(1);

// beforeAll((done) => {
//   done();
// });

// afterAll((done) => {
//   mongoose.connection.close();
//   done();
// });

// // afterEach(() => {
// //   return Car.deleteMany({ make: "BMW fail" }, {});
// // });

// describe("Get all cars", () => {
//   test("Successfully edit data with valid input", async () => {
//     const id = (await Car.findOne({ make: "testing put api" }))._id;
//     // const res0 = request(app).post("/car").send(data.toEditCar[21]);
//     // const { id } = useParams();
//     console.log(id);
//     const res = await request(app).put("/car/${id}").send(data.toEditCar[0]);
//     expect(res.statusCode).toBe(200);
//     expect(res.body.message).toContain("Update Car Successfully!");
//     expect(res.body.car).toMatchObject(data.toEditCar[0]);
//   });
// });
