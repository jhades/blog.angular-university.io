import {Directive, Renderer, ElementRef, forwardRef, Provider} from "angular2/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "angular2/common";
import {isBlank} from "angular2/src/facade/lang";

const CUSTOM_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => SearchBoxValueAccessor), multi: true});


@Directive({
    selector:
        'search-box[ngControl],search-box[ngFormControl],search-box[ngModel]',
    host: {'(search)': 'onChange($event)', '(touched)': 'onTouched()'},
    providers: [CUSTOM_VALUE_ACCESSOR]
})
export class SearchBoxValueAccessor implements ControlValueAccessor {
    
    onChange = (_: any) => {};
    onTouched = () => {};

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) {

    }

    writeValue(value: any): void {
        var normalizedValue = isBlank(value) ? '' : value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'search', normalizedValue);
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}