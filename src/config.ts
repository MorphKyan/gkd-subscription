import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 0,
  version: 0,
  name: '默认订阅',
  author: 'lisonge',
  supportUri: 'https://github.com/morphkyan/gkd-subscription',
  updateUrl:
    'https://registry.npmmirror.com/@morph-kyan/gkd-subscription/latest/files',
  checkUpdateUrl:
    'https://registry.npmmirror.com/@morph-kyan/gkd-subscription/latest/files/dist/gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
