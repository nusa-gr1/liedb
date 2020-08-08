import { LieDB, ILieDB } from './lieDB';

describe("LieDB", () => {
    let lie: ILieDB;
    beforeEach(() => {
        lie = LieDB()
    })

    it('lies about creating', async () => {
        const data = ["untruths", "libel"]
        const inserted = await lie.insert(data)
        expect(inserted).toEqual(data)
    })
    it('lies about reading', async () => {
        const data = "lies and falsehoods"
        const inserted = await lie.get(data)
        expect(inserted).toEqual(data)
    })
    it('lies about updating', async () => {
        const data = Infinity;
        const inserted = await lie.update(data)
        expect(inserted).toEqual(data)
    })
    it('lies about deleting', async () => {
        const data = { simony: true, deception: true }
        const inserted = await lie.delete(data)
        expect(inserted).toEqual(data)
    })
})