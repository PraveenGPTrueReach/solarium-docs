'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">SolariumCustApp documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CompressionError.html" data-type="entity-link" >CompressionError</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorBoundary.html" data-type="entity-link" >ErrorBoundary</a>
                            </li>
                            <li class="link">
                                <a href="classes/KycUploadError.html" data-type="entity-link" >KycUploadError</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogoutManager.html" data-type="entity-link" >LogoutManager</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTimestamps.html" data-type="entity-link" >RefreshTimestamps</a>
                            </li>
                            <li class="link">
                                <a href="classes/SasTokenMutex.html" data-type="entity-link" >SasTokenMutex</a>
                            </li>
                            <li class="link">
                                <a href="classes/SecurePersistAdapter.html" data-type="entity-link" >SecurePersistAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/SecureStorageError.html" data-type="entity-link" >SecureStorageError</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceFetchError.html" data-type="entity-link" >ServiceFetchError</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadMutex.html" data-type="entity-link" >UploadMutex</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidationError.html" data-type="entity-link" >ValidationError</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AcceptRejectButtonsProps.html" data-type="entity-link" >AcceptRejectButtonsProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddMessageRequest.html" data-type="entity-link" >AddMessageRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiConfig.html" data-type="entity-link" >ApiConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiError.html" data-type="entity-link" >ApiError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiErrorResponse.html" data-type="entity-link" >ApiErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiErrorResponse-1.html" data-type="entity-link" >ApiErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiResponse.html" data-type="entity-link" >ApiResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthAttemptState.html" data-type="entity-link" >AuthAttemptState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthResponse.html" data-type="entity-link" >AuthResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthState.html" data-type="entity-link" >AuthState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AzureBlobUploadParams.html" data-type="entity-link" >AzureBlobUploadParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseComponentProps.html" data-type="entity-link" >BaseComponentProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ButtonProps.html" data-type="entity-link" >ButtonProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CacheState.html" data-type="entity-link" >CacheState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartBadgeProps.html" data-type="entity-link" >CartBadgeProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartItem.html" data-type="entity-link" >CartItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartItemRowProps.html" data-type="entity-link" >CartItemRowProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CheckoutFormData.html" data-type="entity-link" >CheckoutFormData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CheckoutState.html" data-type="entity-link" >CheckoutState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColorPalette.html" data-type="entity-link" >ColorPalette</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ComingSoonProps.html" data-type="entity-link" >ComingSoonProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ComponentColors.html" data-type="entity-link" >ComponentColors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ComponentSizes.html" data-type="entity-link" >ComponentSizes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompressionOptions.html" data-type="entity-link" >CompressionOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompressionResult.html" data-type="entity-link" >CompressionResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfirmDialogOptions.html" data-type="entity-link" >ConfirmDialogOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CountdownTimerState.html" data-type="entity-link" >CountdownTimerState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateLeadRequest.html" data-type="entity-link" >CreateLeadRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateTicketModalProps.html" data-type="entity-link" >CreateTicketModalProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateTicketRequest.html" data-type="entity-link" >CreateTicketRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateTicketResponse.html" data-type="entity-link" >CreateTicketResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocsTabProps.html" data-type="entity-link" >DocsTabProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentPickerModalProps.html" data-type="entity-link" >DocumentPickerModalProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentRowProps.html" data-type="entity-link" >DocumentRowProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DraftLead.html" data-type="entity-link" >DraftLead</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DropdownOption.html" data-type="entity-link" >DropdownOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DropdownProps.html" data-type="entity-link" >DropdownProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorBoundaryProps.html" data-type="entity-link" >ErrorBoundaryProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorBoundaryState.html" data-type="entity-link" >ErrorBoundaryState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorMessageProps.html" data-type="entity-link" >ErrorMessageProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExtendedRenderOptions.html" data-type="entity-link" >ExtendedRenderOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExtendedTheme.html" data-type="entity-link" >ExtendedTheme</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormProviderWrapperProps.html" data-type="entity-link" >FormProviderWrapperProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetDocumentSasRequest.html" data-type="entity-link" >GetDocumentSasRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetDocumentSasResponse.html" data-type="entity-link" >GetDocumentSasResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetLeadsRequest.html" data-type="entity-link" >GetLeadsRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetProfileResponse.html" data-type="entity-link" >GetProfileResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetQuotationsRequest.html" data-type="entity-link" >GetQuotationsRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetServicesRequest.html" data-type="entity-link" >GetServicesRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetTicketByIdResponse.html" data-type="entity-link" >GetTicketByIdResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetTicketsResponse.html" data-type="entity-link" >GetTicketsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InfoTabProps.html" data-type="entity-link" >InfoTabProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KycDocument.html" data-type="entity-link" >KycDocument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KycDocUploadParams.html" data-type="entity-link" >KycDocUploadParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KycDocView.html" data-type="entity-link" >KycDocView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Lead.html" data-type="entity-link" >Lead</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadCustomer.html" data-type="entity-link" >LeadCustomer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadListItemProps.html" data-type="entity-link" >LeadListItemProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LeadResponse.html" data-type="entity-link" >LeadResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListKycDocumentsRequest.html" data-type="entity-link" >ListKycDocumentsRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListKycDocumentsResponse.html" data-type="entity-link" >ListKycDocumentsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoadingOverlayContainerProps.html" data-type="entity-link" >LoadingOverlayContainerProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoadingOverlayProps.html" data-type="entity-link" >LoadingOverlayProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoadingSpinnerProps.html" data-type="entity-link" >LoadingSpinnerProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginRequest.html" data-type="entity-link" >LoginRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginResponse.html" data-type="entity-link" >LoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LogoutResponse.html" data-type="entity-link" >LogoutResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MessageBubbleProps.html" data-type="entity-link" >MessageBubbleProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MigrationManifest.html" data-type="entity-link" >MigrationManifest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MigrationResult.html" data-type="entity-link" >MigrationResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewAuthState.html" data-type="entity-link" >NewAuthState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notification.html" data-type="entity-link" >Notification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationBellIconProps.html" data-type="entity-link" >NotificationBellIconProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationListItemProps.html" data-type="entity-link" >NotificationListItemProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationPollingConfig.html" data-type="entity-link" >NotificationPollingConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationPollingState.html" data-type="entity-link" >NotificationPollingState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationsApiResponse.html" data-type="entity-link" >NotificationsApiResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationsQueryParams.html" data-type="entity-link" >NotificationsQueryParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationsState.html" data-type="entity-link" >NotificationsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OTPInputFieldProps.html" data-type="entity-link" >OTPInputFieldProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OTPInputProps.html" data-type="entity-link" >OTPInputProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OTPInputState.html" data-type="entity-link" >OTPInputState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginatedRequest.html" data-type="entity-link" >PaginatedRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginatedResponse.html" data-type="entity-link" >PaginatedResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PersistenceLoadingProps.html" data-type="entity-link" >PersistenceLoadingProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PersistenceStatus.html" data-type="entity-link" >PersistenceStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileApiError.html" data-type="entity-link" >ProfileApiError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileData.html" data-type="entity-link" >ProfileData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileFormData.html" data-type="entity-link" >ProfileFormData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileFormProps.html" data-type="entity-link" >ProfileFormProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileIconProps.html" data-type="entity-link" >ProfileIconProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileValidation.html" data-type="entity-link" >ProfileValidation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationActionResponse.html" data-type="entity-link" >QuotationActionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationComponent.html" data-type="entity-link" >QuotationComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationDetail.html" data-type="entity-link" >QuotationDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationListItem.html" data-type="entity-link" >QuotationListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationPdfResponse.html" data-type="entity-link" >QuotationPdfResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationPricing.html" data-type="entity-link" >QuotationPricing</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotationsListResponse.html" data-type="entity-link" >QuotationsListResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuotesTabProps.html" data-type="entity-link" >QuotesTabProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RefreshError.html" data-type="entity-link" >RefreshError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RefreshHookReturn.html" data-type="entity-link" >RefreshHookReturn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RefreshOptions.html" data-type="entity-link" >RefreshOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RefreshProgress.html" data-type="entity-link" >RefreshProgress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RefreshResult.html" data-type="entity-link" >RefreshResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RefreshState.html" data-type="entity-link" >RefreshState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReopenTicketRequest.html" data-type="entity-link" >ReopenTicketRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestConfig.html" data-type="entity-link" >RequestConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestSasTokenRequest.html" data-type="entity-link" >RequestSasTokenRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RNFile.html" data-type="entity-link" >RNFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoleBasedGuardProps.html" data-type="entity-link" >RoleBasedGuardProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SafeAreaContainerProps.html" data-type="entity-link" >SafeAreaContainerProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SafeAreaLayoutProps.html" data-type="entity-link" >SafeAreaLayoutProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SasInfo.html" data-type="entity-link" >SasInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SasTokenResponse.html" data-type="entity-link" >SasTokenResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SendOtpRequest.html" data-type="entity-link" >SendOtpRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SendOtpResponse.html" data-type="entity-link" >SendOtpResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServerError.html" data-type="entity-link" >ServerError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Service.html" data-type="entity-link" >Service</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServiceItemProps.html" data-type="entity-link" >ServiceItemProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServiceResponse.html" data-type="entity-link" >ServiceResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServicesCartState.html" data-type="entity-link" >ServicesCartState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SingleServiceResponse.html" data-type="entity-link" >SingleServiceResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SpacingScale.html" data-type="entity-link" >SpacingScale</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusBadgeProps.html" data-type="entity-link" >StatusBadgeProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusColorConfig.html" data-type="entity-link" >StatusColorConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StorageResult.html" data-type="entity-link" >StorageResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TestWrapperProps.html" data-type="entity-link" >TestWrapperProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TextInputProps.html" data-type="entity-link" >TextInputProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ThemeProviderProps.html" data-type="entity-link" >ThemeProviderProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ticket.html" data-type="entity-link" >Ticket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketListItem.html" data-type="entity-link" >TicketListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketListItemProps.html" data-type="entity-link" >TicketListItemProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketMessage.html" data-type="entity-link" >TicketMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketPollingConfig.html" data-type="entity-link" >TicketPollingConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketPollingState.html" data-type="entity-link" >TicketPollingState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketsQueryParams.html" data-type="entity-link" >TicketsQueryParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketsState.html" data-type="entity-link" >TicketsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketsTabProps.html" data-type="entity-link" >TicketsTabProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TimerOptions.html" data-type="entity-link" >TimerOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Typography.html" data-type="entity-link" >Typography</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UIState.html" data-type="entity-link" >UIState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateProfileRequest.html" data-type="entity-link" >UpdateProfileRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateProfileResponse.html" data-type="entity-link" >UpdateProfileResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadError.html" data-type="entity-link" >UploadError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadProgress.html" data-type="entity-link" >UploadProgress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadResult.html" data-type="entity-link" >UploadResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseActionDebounceOptions.html" data-type="entity-link" >UseActionDebounceOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseActionDebounceResult.html" data-type="entity-link" >UseActionDebounceResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseAuthRestoreConfig.html" data-type="entity-link" >UseAuthRestoreConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseCartActionsReturn.html" data-type="entity-link" >UseCartActionsReturn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseKycDocsResult.html" data-type="entity-link" >UseKycDocsResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UseKycUploadReturn.html" data-type="entity-link" >UseKycUploadReturn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-1.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-2.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValidationError.html" data-type="entity-link" >ValidationError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VerifyOtpRequest.html" data-type="entity-link" >VerifyOtpRequest</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});