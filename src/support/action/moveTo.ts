/**
 * Move to the given selector with an optional offset on a X and Y position
 * @param  {String}   selector  Element selector
 * @param  {String}   x        X coordinate to move to
 * @param  {String}   y        Y coordinate to move to
 */
export function moveTo(selector: string, x: string, y: string): void {
    const xOffset = parseInt(x, 10) || undefined;
    const yOffset = parseInt(y, 10) || undefined;

    $(selector).moveTo({ xOffset, yOffset });
}
