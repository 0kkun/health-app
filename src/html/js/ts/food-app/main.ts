import { Foods } from "./foods";
import { ApiGetTest } from './api-test';

Foods.getInstance();

// APIテスト用
const apiTestUrl = "https://randomuser.me/api/";
ApiGetTest(apiTestUrl);