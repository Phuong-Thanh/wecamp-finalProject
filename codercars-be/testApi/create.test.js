import app from "../app";
import request from "supertest";
import mongoose from "mongoose";

beforeAll((done) => {
  done();
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close();
  done();
});

describe("Get all cars", () => {
  test("should get all cars", async () => {
    const respond = await request(app).get("/");
    expect(respond.statusCode).toBe(200);
  });
});
