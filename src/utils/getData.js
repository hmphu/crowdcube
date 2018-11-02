import axios from 'axios';

export default async () => {
  const response = await axios.get('https://gist.githubusercontent.com/cedmax/a5699ed75aab57c2be1bf7a6028f4f06/raw/08f0c6bc16a013307f1b4856eecccfc4bd85f8d3/crowdcube-test-data.json');
  return response;
};
