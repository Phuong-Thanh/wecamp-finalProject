import app from "../app";
import request from "supertest";
import mongoose from "mongoose";
import { data } from "./testData";
import Car from "../models/Car";

let latestData = Car.find().sort({ createdAt: 1 }).limit(1);

beforeAll((done) => {
  done();
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});

// afterEach(() => {
//   return Car.deleteMany();
// });

describe("Get all cars", () => {
  test("Verify status code 200 when successfully get all cars", async () => {
    const respond = await request(app).get("/");
    expect(respond.statusCode).toBe(200);
  });

  test("Create new data", async () => {
    try {
      const respond = await request(app).post("/car").send(data.newCar[0]);
      expect(respond.statusCode).toBe(200);
      expect(respond.body.car).toMatchObject(data.newCar[0]);
    } finally {
      return Car.deleteOne(latestData);
    }
  });
});
