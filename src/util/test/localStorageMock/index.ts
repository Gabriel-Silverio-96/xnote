const localStorageMock = () => {
    Object.defineProperty(window, "localStorage", {
        value: {
            getItem: jest.fn(() => null),
            setItem: jest.fn(() => null),
            removeItem: jest.fn(() => null),
            clear: jest.fn(() => null),
        },
        writable: true
    });
};

export default localStorageMock;