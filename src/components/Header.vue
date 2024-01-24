<template>
    <header>
        <div class="row">
            <!--Logo-->
            <div class="logo col">
                <img src="../assets/5D Mini Product Icon RGB 300ppi.png" alt="Site Logo">
            </div>
            <div class="align-right col">
                <!--My account dropdown-->
                <div id="my-account" class="dropdown d-inline-block">
                    <button class="btn text-white" type="button" data-bs-toggle="dropdown">My Account
                        <span class="caret"></span>
                    </button>
                    <ul id="my-account-dropdown" class="dropdown-menu my-account-dropdown">
                        <li><a href="#">Onboarding</a></li>
                        <li><button id="aa-safe-btn" onclick="toggleStylesheet()">AA safe mode</button></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>

                <!--Search bar-->
                <div class="search-bar d-inline-block">
                    <!-- <input type="text" placeholder="Search..."> -->
                    <button class="btn btn-primary fa fa-search" id="search-icon" aria-hidden="true"></button>
                </div>

            </div>
        </div>
    </header>
</template>

