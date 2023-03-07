export default function toggleselectors(ref, event) {
    if (ref.current && !ref.current.contains(event.target)) {
        return false;
    } else {
        return true;
    }
}