import { config } from '@vue/test-utils';
import en from '../../src/locale/en/en';
import '../unit/mocks/installMock';

config.mocks.$t = (msg) => en[msg] || msg;
config.mocks.$tc = (msg) => en[msg] || msg;
