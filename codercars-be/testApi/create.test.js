import app from "../app";
import request from "supertest";
import mongoose from "mongoose";
import data from "./testData";

beforeAll((done) => {
  done();
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});

describe("Get all cars", () => {
  test("Verify status code 200 when successfully get all cars", async () => {
    const respond = await request(app).get("/");
    expect(respond.statusCode).toBe(200);
  });

  test("Create new data", async () => {
    const respond = await request(app).post("/").send(data.newCar[0]);
    expect(respond.statusCode).toBe(200);
  });
});
