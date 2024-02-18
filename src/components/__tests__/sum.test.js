import { sum } from "../sum";

test('sum function should calculate sum of two number', () => {
    
    const res=sum(10,12);
    expect(res).toBe(22);
})