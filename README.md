# پروژه APK آزمایشی — داشبورد عملکرد تیم فناوری اطلاعات

این پروژه، نسخه فعلی داشبورد را در یک پوسته Android/Capacitor قرار می‌دهد.

## نکته مهم
این نسخه APK آزمایشی است و هنوز به VPS/PostgreSQL وصل نیست.
اطلاعات در این مرحله محلی روی همان دستگاه ذخیره می‌شوند.

## ساخت APK
نیازمندی‌ها:
- Node.js
- Android Studio
- Android SDK

دستورات:
1. npm install
2. npx cap add android
3. npx cap sync android
4. npx cap open android

سپس در Android Studio پروژه را Build کن.

پس از آماده شدن VPS، همین پروژه برای اتصال به Backend مرکزی به‌روزرسانی خواهد شد.
