import { config } from '@vue/test-utils';
import en from '../../src/locale/en/en';
import '../unit/mocks/installMock';

config.global.mocks.$t = (msg) => en[msg] || msg;
config.global.mocks.$tc = (msg) => en[msg] || msg;
