import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './kata.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('step -- 1 ', () => {
    it('add "" should be 0', () => {
      expect(appController.add("")).toBe(0);
    });

    it('add "1" should be 1', () => {
      expect(appController.add("1")).toBe(1);
    });

    it('add "1,2" should be 1', () => {
      expect(appController.add("1,2")).toBe(3);
    });

    it('add "1, 2" should be 1', () => {
      expect(appController.add("1, 2")).toBe(3);
    });
  });
  describe('step -- 2 ', () => {
    it('manage with -ve values', () => {
      expect(appController.add("-1, 2")).toBe(1);
    });
    it('if we have any charector other than , it should return undefined', () => {
      expect(appController.add("1, 2/")).toBe(undefined);
    });
  });

  describe('step -- 3 (use custom separator)', () => {
    it(' if input start with charector , it will considered as separator ', () => {
      expect(appController.add("*1*2*3")).toBe(6);
      expect(appController.add("**1**2**3")).toBe(6);
    });

    it(' if different separator used return undefined ', () => {
      expect(appController.add("*1*2**3")).toBe(undefined);
    });
  });
});
