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
});
