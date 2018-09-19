import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
// import { AuthenticationService } from '../../service/authentication.service';
// import { AlertService } from '../../service/alert.service';
import { AuthService } from './../../services/auth.service';
import { LoginModel } from './../../shared/model/login';

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    message: string;
    loginFormGroup: any = {};
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
    }

    // convenience getter for easy access to form fields
    get f(): any {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authService
            .login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    if (data) {
                        this.router.navigate([this.returnUrl]);
                        this.authService.setCurrentUser(data as LoginModel);
                        console.log(this.returnUrl);
                        this.message = '';
                        this.loading = true;
                    }
                },
                error => {
                    console.log(error);
                    this.loading = false;
                    if (error.status === 422) {
                        this.message = error.error.errors.email[0];
                    } else this.message = 'Username or password not correct!';
                }
            );
    }
}
