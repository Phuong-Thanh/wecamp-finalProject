import app from "../app";
import request from "supertest";
import mongoose from "mongoose";
import { data } from "./createData";
import Car from "../models/Car";

let latestData = Car.find().hint({ $natural: -1 }).limit(1);

beforeAll((done) => {
  done();
});

afterEach(() => {
  return Car.deleteMany({ make: "BMW fail" }, {});
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});

describe("Get all cars", () => {
  test("Verify status code 200 when successfully get all cars", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  test("Successfully create new data with valid input", async () => {
    try {
      const res = await request(app).post("/car").send(data.newCar[0]);
      expect(res.statusCode).toBe(200);
      expect(res.body.car).toMatchObject(data.newCar[0]);
    } finally {
      return Car.deleteOne(latestData);
    }
  });
  test("Successfully create new data with special characters", async () => {
    try {
      const res = await request(app).post("/car").send(data.newCar[1]);
      expect(res.body.car).toMatchObject(data.newCar[1]);
      expect(res.statusCode).toBe(200);
    } finally {
      return Car.deleteOne(latestData);
    }
  });

  test("Successfully create new data with invalid select for Transmission type field", async () => {
    const res = await request(app).post("/car").send(data.newCar[2]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Car validation failed");
  });
  test("Successfully create new data with invalid select for Size field", async () => {
    const res = await request(app).post("/car").send(data.newCar[3]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Car validation failed");
  });

  test("Successfully create new data with past year input", async () => {
    const res = await request(app).post("/car").send(data.newCar[4]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Car validation failed");
  });
  test("Successfully create new data with future year input", async () => {
    const res = await request(app).post("/car").send(data.newCar[5]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Car validation failed");
  });

  test("Successfully create new data with string year input", async () => {
    const res = await request(app).post("/car").send(data.newCar[6]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Car validation failed");
  });
  test("Successfully create new data with non-integer year input", async () => {
    const res = await request(app).post("/car").send(data.newCar[7]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Car validation failed");
  });
  test("Successfully create new data with min price input", async () => {
    const res = await request(app).post("/car").send(data.newCar[8]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Car validation failed");
  });
  test("Successfully create new data with max price input", async () => {
    const res = await request(app).post("/car").send(data.newCar[9]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Car validation failed");
  });
  test("Successfully create new data with non-integer price input", async () => {
    const res = await request(app).post("/car").send(data.newCar[10]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Car validation failed");
  });
  test("Successfully create new data with string price input", async () => {
    const res = await request(app).post("/car").send(data.newCar[11]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Car validation failed");
  });
  test("Successfully create new data with empty make field", async () => {
    const res = await request(app).post("/car").send(data.newCar[12]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Missing required info!");
  });

  test("Successfully create new data with empty model field", async () => {
    const res = await request(app).post("/car").send(data.newCar[13]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Missing required info!");
  });
  test("Successfully create new data with empty release-date field", async () => {
    const res = await request(app).post("/car").send(data.newCar[14]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Missing required info!");
  });
  test("Successfully create new data with empty transmission-type field", async () => {
    const res = await request(app).post("/car").send(data.newCar[15]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Missing required info!");
  });
  test("Successfully create new data with empty size field", async () => {
    const res = await request(app).post("/car").send(data.newCar[16]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Missing required info!");
  });
  test("Successfully create new data with empty style field", async () => {
    const res = await request(app).post("/car").send(data.newCar[17]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Missing required info!");
  });
  test("Successfully create new data with empty price field", async () => {
    const res = await request(app).post("/car").send(data.newCar[18]);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toContain("Missing required info!");
  });
});
