"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DefaultModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var default_component_1 = require("./default.component");
var home_component_1 = require("src/app/modules/home/home.component");
var about_component_1 = require("src/app/modules/about/about.component");
var router_1 = require("@angular/router");
var flex_layout_1 = require("@angular/flex-layout");
var login_component_1 = require("src/app/modules/login/login.component");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var forms_1 = require("@angular/forms");
var section_experience_component_1 = require("src/app/modules/home/section-experience/section-experience.component");
var section_home_component_1 = require("src/app/modules/home/section-home/section-home.component");
var section_satisfy_component_1 = require("src/app/modules/home/section-satisfy/section-satisfy.component");
var rooms_component_1 = require("src/app/modules/rooms/rooms.component");
var room_types_component_1 = require("src/app/modules/rooms/room-types/room-types.component");
var explore_component_1 = require("src/app/modules/explore/explore.component");
var book_component_1 = require("src/app/modules/book/book.component");
var restaurant_component_1 = require("src/app/modules/restaurant/restaurant.component");
var explore_home_component_1 = require("src/app/modules/explore/explore-home/explore-home.component");
var video_explore_component_1 = require("src/app/modules/explore/video-explore/video-explore.component");
var restaurant_home_component_1 = require("src/app/modules/restaurant/restaurant-home/restaurant-home.component");
var menu_search_component_1 = require("src/app/modules/restaurant/menu-search/menu-search.component");
var domseguro_pipe_1 = require("src/app/modules/explore/video-explore/domseguro.pipe");
var mission_component_1 = require("src/app/modules/about/mission/mission.component");
var meet_our_team_component_1 = require("src/app/modules/book/meet-our-team/meet-our-team.component");
var contact_component_1 = require("src/app/modules/login/contact/contact.component");
var form_book_component_1 = require("src/app/modules/book/form-book/form-book.component");
var http_1 = require("@angular/common/http");
var map_component_1 = require("src/app/modules/about/map/map.component");
var img_explore_component_1 = require("src/app/modules/explore/img-explore/img-explore.component");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var core_2 = require("@angular/material/core");
var datepicker_1 = require("@angular/material/datepicker");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var select_1 = require("@angular/material/select");
var table_reserved_component_1 = require("src/app/modules/reservations/table-reserved/table-reserved.component");
var table_1 = require("@angular/material/table");
var reservations_component_1 = require("src/app/modules/reservations/reservations.component");
var satisfaction_form_component_1 = require("src/app/modules/login/satisfaction-form/satisfaction-form.component");
var sidenav_1 = require("@angular/material/sidenav");
var button_1 = require("@angular/material/button");
var radio_1 = require("@angular/material/radio");
var shared_module_1 = require("src/app/shared/shared.module");
//import {MatDateFnsModule} from '@angular/material-date-fns-adapter';
var DefaultModule = /** @class */ (function () {
    function DefaultModule() {
    }
    DefaultModule = __decorate([
        core_1.NgModule({
            declarations: [
                default_component_1.DefaultComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                login_component_1.LoginComponent,
                section_experience_component_1.SectionExperienceComponent,
                section_home_component_1.SectionHomeComponent,
                section_satisfy_component_1.SectionSatisfyComponent,
                rooms_component_1.RoomsComponent,
                room_types_component_1.RoomTypesComponent,
                explore_component_1.ExploreComponent,
                book_component_1.BookComponent,
                restaurant_component_1.RestaurantComponent,
                explore_home_component_1.ExploreHomeComponent,
                video_explore_component_1.VideoExploreComponent,
                restaurant_home_component_1.RestaurantHomeComponent,
                menu_search_component_1.MenuSearchComponent,
                domseguro_pipe_1.DomseguroPipe,
                mission_component_1.MissionComponent,
                meet_our_team_component_1.MeetOurTeamComponent,
                contact_component_1.ContactComponent,
                form_book_component_1.FormBookComponent,
                map_component_1.MapComponent,
                img_explore_component_1.ImgExploreComponent,
                reservations_component_1.ReservationsComponent,
                satisfaction_form_component_1.SatisfactionFormComponent,
                table_reserved_component_1.TableReservedComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                flex_layout_1.FlexLayoutModule,
                shared_module_1.SharedModule,
                angular_fontawesome_1.FontAwesomeModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                slide_toggle_1.MatSlideToggleModule,
                core_2.MatNativeDateModule,
                datepicker_1.MatDatepickerModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                table_1.MatTableModule,
                common_1.NgIf,
                sidenav_1.MatSidenavModule,
                button_1.MatButtonModule,
                radio_1.MatRadioModule
            ]
        })
    ], DefaultModule);
    return DefaultModule;
}());
exports.DefaultModule = DefaultModule;
