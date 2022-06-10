import { msToReadableTime, urlValidator } from "../../helpers";


test('isValidUrl when not vimeo url', () => {
  const url = 'https://google.fr/';
  expect(urlValidator(url)).toBe(false);
});
test('isValidUrl when vimeo url', () => {
  expect(urlValidator('https://vimeo.com/565486457')).toBe(true);
});

test('isValidUrl when flickr url', () => {
  expect(
    urlValidator('https://www.flickr.com/photos/feuilllu/45771361701/')
  ).toBe(true);
});
