# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170216170312) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "title",                    null: false
    t.integer  "artist_id",                null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.string   "album_cover_file_name"
    t.string   "album_cover_content_type"
    t.integer  "album_cover_file_size"
    t.datetime "album_cover_updated_at"
  end

  add_index "albums", ["artist_id"], name: "index_albums_on_artist_id", using: :btree
  add_index "albums", ["title"], name: "index_albums_on_title", using: :btree

  create_table "artists", force: :cascade do |t|
    t.string   "name",                       null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "profile_photo_file_name"
    t.string   "profile_photo_content_type"
    t.integer  "profile_photo_file_size"
    t.datetime "profile_photo_updated_at"
    t.string   "header_photo_file_name"
    t.string   "header_photo_content_type"
    t.integer  "header_photo_file_size"
    t.datetime "header_photo_updated_at"
  end

  add_index "artists", ["name"], name: "index_artists_on_name", using: :btree

  create_table "songs", force: :cascade do |t|
    t.string   "title",              null: false
    t.integer  "duration",           null: false
    t.integer  "album_id",           null: false
    t.integer  "ord",                null: false
    t.string   "audio_file_name",    null: false
    t.string   "audio_content_type", null: false
    t.integer  "audio_file_size",    null: false
    t.datetime "audio_updated_at",   null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "songs", ["album_id"], name: "index_songs_on_album_id", using: :btree
  add_index "songs", ["title"], name: "index_songs_on_title", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                   null: false
    t.string   "email",                      null: false
    t.string   "f_name",                     null: false
    t.string   "l_name",                     null: false
    t.string   "password_digest",            null: false
    t.string   "session_token",              null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "profile_photo_file_name"
    t.string   "profile_photo_content_type"
    t.integer  "profile_photo_file_size"
    t.datetime "profile_photo_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["f_name"], name: "index_users_on_f_name", using: :btree
  add_index "users", ["l_name"], name: "index_users_on_l_name", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
