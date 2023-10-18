export default function stripUUID(value: string) {
    return value.split('.').slice(1).join('.');
}