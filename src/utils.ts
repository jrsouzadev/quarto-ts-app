export function generateId(num: number = 8): string {
    const letters = 'bcdfghjklmnpqrstvwxz';
    const chars = letters + letters.toUpperCase() + '1234567890';
    let id = ""
    for (let i = 0; i < num; i++) {
        let c = chars[Math.floor(Math.random() * chars.length)]
        id += c;
    }
    return id;
}