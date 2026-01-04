import { ValidationArguments, ValidatorConstraint, type ValidatorConstraintInterface } from "class-validator";
import { SendOtpRequest } from "src/modules/auth/dto";

@ValidatorConstraint({ name: "IndentifierValidator", async: false })
export class IndentifierValidator implements ValidatorConstraintInterface {
    public validate(value: string, args: ValidationArguments): boolean {
        const object = args.object as SendOtpRequest;

        if (object.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return (
                typeof value === "string" && emailRegex.test(value)
            );
        }
        else if (object.type === 'phone') {
            const phoneRegex = /^\+?\d{10,15}$/;
            return (
                typeof value === "string" && phoneRegex.test(value)
            );
        }

        return false;
    }

    public defaultMessage(args: ValidationArguments): string {
        const object = args.object as SendOtpRequest;

        if (object.type === 'email') {
            return 'Identifier must be a valid email address.';
        } else if (object.type === 'phone') {
            return 'Identifier must be a valid phone number.';
        }

        return 'Identifier is not valid.';
    }
}
