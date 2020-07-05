import YmdDate from '../../src/types/YmdDate';

expect.extend({
    toBeParsedStamp(received: YmdDate, expected: YmdDate) : jest.CustomMatcherResult {
        let failedOn: string = '';

        if (received.year !== expected.year) {
            failedOn = 'year';
        } else if (received.month !== expected.month) {
            failedOn = 'month';
        } else if (received.day !== expected.day) {
            failedOn = 'day';
        }

        return failedOn.length
            ? {pass: false, message: () => `expected ${failedOn} ${received[failedOn]} to be ${expected[failedOn]}`}
            : {pass: true, message: () => `expected parsed to not be as expected`}
    },
});

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeParsedStamp(expected: YmdDate): jest.CustomMatcherResult;
        }
    }
}
